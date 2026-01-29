import { afterEach, beforeEach, vi } from "vitest"

const storage: Record<string, string> = {}

class LocalStorageMock {
  getItem(key: string) {
    return Object.prototype.hasOwnProperty.call(storage, key) ? storage[key] : null
  }
  setItem(key: string, value: string) {
    storage[key] = value
  }
  removeItem(key: string) {
    delete storage[key]
  }
  clear() {
    Object.keys(storage).forEach((key) => delete storage[key])
  }
}

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: new LocalStorageMock(),
    configurable: true,
  })
})

afterEach(() => {
  vi.restoreAllMocks()
})
