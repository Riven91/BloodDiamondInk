(function(){
  if (typeof window === 'undefined') return;
  var w = window;
  var d = document;
  function readCookie(name){
    var match = ('; ' + d.cookie).split('; ' + name + '=');
    if (match.length === 2) return match.pop().split(';').shift();
  }
  function writeCookie(name,value,days){
    var expires = new Date();
    expires.setTime(expires.getTime() + ((days || 180) * 24 * 60 * 60 * 1000));
    d.cookie = name + '=' + value + ';path=/;expires=' + expires.toUTCString();
  }
  function parseJson(value){
    try { return JSON.parse(value); } catch (err) { return null; }
  }
  function asString(value){
    return value == null ? '' : String(value);
  }
  function resolveTranslation(obj,path){
    return path.split('.').reduce(function(acc,key){
      return acc && acc[key] != null ? acc[key] : null;
    }, obj);
  }
  function isObject(value){
    return value && typeof value === 'object';
  }
  function prefersReducedMotion(){
    return w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  var api = {
    config: null,
    state: {},
    consentGiven: false,
    notice: null,
    modal: null,
    overlay: null,
    lang: 'de',
    initialized: false,
    setConfig: function(cfg){
      this.config = cfg || {};
      if (cfg && cfg.translations){
        var first = Object.keys(cfg.translations)[0];
        if (first) this.lang = first;
      }
      if (this.initialized) this.setup();
    },
    init: function(){
      if (this.initialized) return;
      this.initialized = true;
      this.setup();
    },
    setup: function(){
      if (!this.config) return;
      this.injectStyles();
      this.loadFromCookie();
      this.applyStoredConsents();
      if (!this.consentGiven || this.config.mustConsent) this.buildNotice();
      this.buildModal();
      if (this.config.mustConsent && this.notice) this.showNotice();
    },
    injectStyles: function(){
      if (d.getElementById('klaro-style')) return;
      var style = d.createElement('style');
      style.id = 'klaro-style';
      style.textContent = (
        '.klaro-hidden{display:none!important}' +
        '.klaro-overlay{position:fixed;inset:0;background:rgba(15,15,15,.65);z-index:2147483646;display:flex;align-items:center;justify-content:center;padding:1rem;' +
          (prefersReducedMotion() ? '' : 'backdrop-filter:blur(4px);') + '}' +
        '.klaro-modal{max-width:36rem;width:100%;background:#0f0f0f;color:#f5f5f5;border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,.4);font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow:hidden;border:1px solid rgba(255,255,255,.08)}' +
        '.klaro-modal header{padding:1.5rem 1.5rem 1rem;border-bottom:1px solid rgba(255,255,255,.08)}' +
        '.klaro-modal h2{margin:0;font-size:1.25rem;font-weight:600}' +
        '.klaro-modal p{margin:.5rem 0 0;font-size:.95rem;line-height:1.5}' +
        '.klaro-modal .klaro-services{max-height:16rem;overflow:auto;padding:1rem 1.5rem;display:flex;flex-direction:column;gap:1rem}' +
        '.klaro-service{display:flex;align-items:flex-start;gap:.75rem}' +
        '.klaro-service label{display:flex;flex-direction:column;gap:.35rem;font-size:.95rem}' +
        '.klaro-service small{color:rgba(245,245,245,.7);font-size:.8rem}' +
        '.klaro-toggle{position:relative;display:inline-flex;align-items:center}' +
        '.klaro-toggle input{appearance:none;width:46px;height:24px;border-radius:999px;background:rgba(255,255,255,.25);transition:all .2s ease;cursor:pointer;outline:none}' +
        '.klaro-toggle input:checked{background:#22c55e}' +
        '.klaro-toggle span{position:absolute;width:18px;height:18px;border-radius:50%;background:#0f0f0f;top:3px;left:4px;transition:all .2s ease}' +
        '.klaro-toggle input:checked+span{transform:translateX(20px)}' +
        '.klaro-actions{display:flex;flex-wrap:wrap;gap:.75rem;padding:1rem 1.5rem 1.5rem;border-top:1px solid rgba(255,255,255,.08)}' +
        '.klaro-btn{flex:1 1 auto;min-width:140px;padding:.75rem 1rem;border-radius:999px;border:1px solid transparent;font-weight:600;font-size:.9rem;cursor:pointer;transition:all .2s ease;background:#1f2937;color:#f5f5f5}' +
        '.klaro-btn.primary{background:#22c55e;color:#0f172a}' +
        '.klaro-btn.secondary{background:transparent;border-color:rgba(255,255,255,.3)}' +
        '.klaro-btn.ghost{background:rgba(255,255,255,.08)}' +
        '.klaro-notice{position:fixed;left:1rem;right:1rem;bottom:1rem;background:#0f0f0f;color:#f5f5f5;padding:1.25rem;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.35);z-index:2147483645;border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;gap:1rem;max-width:420px;margin:0 auto}' +
        '@media(min-width:640px){.klaro-notice{left:auto}}' +
        '.klaro-notice p{margin:0;font-size:.95rem;line-height:1.5}' +
        '.klaro-notice .klaro-buttons{display:flex;flex-wrap:wrap;gap:.5rem}' +
        '.klaro-notice button{flex:1 1 auto;min-width:120px;padding:.6rem .75rem;border-radius:999px;border:1px solid transparent;font-weight:600;font-size:.85rem;cursor:pointer;background:#22c55e;color:#0f172a}' +
        '.klaro-notice button.secondary{background:transparent;border-color:rgba(255,255,255,.3);color:#f5f5f5}'
      );
      d.head.appendChild(style);
    },
    loadFromCookie: function(){
      var raw = readCookie(this.config.cookieName || 'klaro');
      if (!raw){
        this.consentGiven = false;
        this.state = {};
        return;
      }
      var parsed = parseJson(raw);
      if (!parsed || !isObject(parsed.consents)){
        this.consentGiven = false;
        this.state = {};
        return;
      }
      this.state = parsed.consents || {};
      this.consentGiven = true;
    },
    saveToCookie: function(){
      if (!this.config.cookieName) return;
      var payload = { consents: this.state, updatedAt: new Date().toISOString() };
      writeCookie(this.config.cookieName, JSON.stringify(payload), this.config.cookieExpires || 180);
    },
    applyStoredConsents: function(){
      var self = this;
      var services = this.config.services || [];
      var state = services.reduce(function(acc, service){
        var name = service.name;
        var value = Object.prototype.hasOwnProperty.call(self.state, name)
          ? self.state[name]
          : (service.default === true || self.config.default === true);
        acc[name] = !!value;
        return acc;
      }, {});
      this.state = state;
      this.updateServices();
    },
    updateServices: function(){
      var self = this;
      (this.config.services || []).forEach(function(service){
        try {
          var consent = self.state[service.name] === true;
          self.runServiceCallback(service, consent);
        } catch (err) {
          console && console.warn && console.warn('[klaro]', err);
        }
      });
    },
    runServiceCallback: function(service, consent){
      if (typeof service.callback === 'function'){
        try { service.callback.call(w, consent, service); } catch (err) {}
      }
    },
    buildNotice: function(){
      var self = this;
      var description = this.getTranslation('consentNotice.description');
      if (!description) return;
      var existing = d.getElementById('klaro-notice');
      if (existing){ this.notice = existing; return; }
      var notice = d.createElement('div');
      notice.id = 'klaro-notice';
      notice.className = 'klaro-notice';
      var paragraph = d.createElement('p');
      paragraph.innerHTML = asString(description);
      var buttons = d.createElement('div');
      buttons.className = 'klaro-buttons';
      var acceptAll = d.createElement('button');
      acceptAll.type = 'button';
      acceptAll.textContent = asString(this.getTranslation('acceptAll') || this.getTranslation('ok') || 'Alle akzeptieren');
      acceptAll.addEventListener('click', function(){ self.acceptAll(); });
      buttons.appendChild(acceptAll);
      var settings = d.createElement('button');
      settings.type = 'button';
      settings.className = 'secondary';
      settings.textContent = asString(this.getTranslation('consentNotice.learnMore') || 'Einstellungen');
      settings.addEventListener('click', function(){ self.showModal(); });
      buttons.appendChild(settings);
      if (this.config.hideDeclineAll !== true){
        var decline = d.createElement('button');
        decline.type = 'button';
        decline.className = 'secondary';
        decline.textContent = asString(this.getTranslation('decline') || 'Alle ablehnen');
        decline.addEventListener('click', function(){ self.declineAll(); });
        buttons.appendChild(decline);
      }
      notice.appendChild(paragraph);
      notice.appendChild(buttons);
      d.body.appendChild(notice);
      this.notice = notice;
    },
    removeNotice: function(){
      if (this.notice && this.notice.parentNode) this.notice.parentNode.removeChild(this.notice);
      this.notice = null;
    },
    showNotice: function(){
      if (this.notice) this.notice.classList.remove('klaro-hidden');
    },
    hideNotice: function(){
      if (this.notice) this.notice.classList.add('klaro-hidden');
    },
    buildModal: function(){
      var self = this;
      var overlay = d.getElementById('klaro-overlay');
      if (overlay){
        this.overlay = overlay;
        this.modal = overlay.querySelector('.klaro-modal');
        return;
      }
      overlay = d.createElement('div');
      overlay.id = 'klaro-overlay';
      overlay.className = 'klaro-overlay klaro-hidden';
      var modal = d.createElement('div');
      modal.className = 'klaro-modal';
      var header = d.createElement('header');
      var title = d.createElement('h2');
      title.textContent = asString(this.getTranslation('consentModal.title') || 'Datenschutz');
      var description = d.createElement('p');
      description.innerHTML = asString(this.getTranslation('consentModal.description') || '');
      header.appendChild(title);
      header.appendChild(description);
      var servicesList = d.createElement('div');
      servicesList.className = 'klaro-services';
      (this.config.services || []).forEach(function(service){
        var wrapper = d.createElement('div');
        wrapper.className = 'klaro-service';
        var toggle = d.createElement('div');
        toggle.className = 'klaro-toggle';
        var input = d.createElement('input');
        input.type = 'checkbox';
        input.id = 'klaro-' + service.name;
        input.checked = !!self.state[service.name];
        input.addEventListener('change', function(){
          self.state[service.name] = input.checked;
        });
        var slider = d.createElement('span');
        toggle.appendChild(input);
        toggle.appendChild(slider);
        var label = d.createElement('label');
        label.setAttribute('for', input.id);
        var heading = d.createElement('strong');
        heading.textContent = asString(service.title || service.name);
        var subline = d.createElement('small');
        var purposes = (service.purposes || []).map(function(key){
          return asString(self.getTranslation('purposes.' + key) || key);
        }).join(', ');
        subline.textContent = purposes ? purposes : asString(self.getTranslation('service.disabled') || '');
        label.appendChild(heading);
        if (purposes) label.appendChild(subline);
        wrapper.appendChild(toggle);
        wrapper.appendChild(label);
        servicesList.appendChild(wrapper);
      });
      var actions = d.createElement('div');
      actions.className = 'klaro-actions';
      var acceptAllBtn = d.createElement('button');
      acceptAllBtn.type = 'button';
      acceptAllBtn.className = 'klaro-btn primary';
      acceptAllBtn.textContent = asString(this.getTranslation('acceptAll') || 'Alle akzeptieren');
      acceptAllBtn.addEventListener('click', function(){ self.acceptAll(); });
      var acceptSelectedBtn = d.createElement('button');
      acceptSelectedBtn.type = 'button';
      acceptSelectedBtn.className = 'klaro-btn ghost';
      acceptSelectedBtn.textContent = asString(this.getTranslation('acceptSelected') || 'Auswahl speichern');
      acceptSelectedBtn.addEventListener('click', function(){ self.acceptSelected(); });
      actions.appendChild(acceptAllBtn);
      actions.appendChild(acceptSelectedBtn);
      if (this.config.hideDeclineAll !== true){
        var declineBtn = d.createElement('button');
        declineBtn.type = 'button';
        declineBtn.className = 'klaro-btn secondary';
        declineBtn.textContent = asString(this.getTranslation('decline') || 'Alle ablehnen');
        declineBtn.addEventListener('click', function(){ self.declineAll(); });
        actions.appendChild(declineBtn);
      }
      modal.appendChild(header);
      modal.appendChild(servicesList);
      modal.appendChild(actions);
      overlay.appendChild(modal);
      d.body.appendChild(overlay);
      this.overlay = overlay;
      this.modal = modal;
    },
    showModal: function(){
      if (!this.overlay) this.buildModal();
      this.syncModalState();
      if (this.overlay) this.overlay.classList.remove('klaro-hidden');
      this.hideNotice();
    },
    hideModal: function(){
      if (this.overlay) this.overlay.classList.add('klaro-hidden');
    },
    syncModalState: function(){
      var self = this;
      (this.config.services || []).forEach(function(service){
        var input = d.getElementById('klaro-' + service.name);
        if (input) input.checked = !!self.state[service.name];
      });
    },
    acceptAll: function(){
      var self = this;
      (this.config.services || []).forEach(function(service){
        self.state[service.name] = true;
      });
      this.saveConsentsAndApply(true);
    },
    declineAll: function(){
      var self = this;
      (this.config.services || []).forEach(function(service){
        self.state[service.name] = false;
      });
      this.saveConsentsAndApply(false);
    },
    acceptSelected: function(){
      this.saveConsentsAndApply();
    },
    saveConsentsAndApply: function(forceValue){
      var self = this;
      if (typeof forceValue === 'boolean'){
        (this.config.services || []).forEach(function(service){
          self.state[service.name] = forceValue;
        });
      }
      this.consentGiven = true;
      this.saveToCookie();
      this.updateServices();
      this.hideModal();
      this.hideNotice();
    },
    getTranslation: function(path){
      if (!this.config || !this.config.translations) return null;
      var langObj = this.config.translations[this.lang] || this.config.translations.de || Object.values(this.config.translations)[0];
      if (!langObj) return null;
      return resolveTranslation(langObj, path);
    },
    show: function(){ this.showModal(); },
    reset: function(){
      this.state = {};
      this.consentGiven = false;
      this.saveToCookie();
      this.showModal();
    }
  };
  Object.defineProperty(w, 'klaroConfig', {
    configurable: true,
    enumerable: true,
    get: function(){ return api.config; },
    set: function(value){
      api.setConfig(value);
      api.init();
    }
  });
  if (w.__klaroPreConfig){
    api.setConfig(w.__klaroPreConfig);
  }
  w.klaro = api;
  function boot(){
    if (w.__klaroPreConfig) api.setConfig(w.__klaroPreConfig);
    if (w.klaroConfig) api.setConfig(w.klaroConfig);
    api.init();
  }
  if (d.readyState === 'complete' || d.readyState === 'interactive') setTimeout(boot, 0);
  else d.addEventListener('DOMContentLoaded', boot);
})();
