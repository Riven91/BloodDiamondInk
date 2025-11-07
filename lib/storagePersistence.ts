export async function tryPersistStorage(): Promise<void> {
  if (typeof navigator === "undefined" || !("storage" in navigator)) {
    return;
  }

  try {
    if ("persist" in navigator.storage) {
      await navigator.storage.persist();
    }

    if ("estimate" in navigator.storage) {
      await navigator.storage.estimate();
    }
  } catch {
    // Gracefully ignore persistence errors.
  }
}
