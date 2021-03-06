import { onUnmounted, watchEffect } from 'vue'

interface Timer {
  /**
   * Start timer, cancel existing one if already started.
   *
   * If you omit the handler during timer creation, one must be provided on first restart.
   * @param time interval time
   * @param newHandler overwrite existing timer handler with new one
   */
  restart(time: number, newHandler?: () => void): void
  /**
   * Cancel timer, if one is currently running
   */
  cancel(): void
}

/**
 * Timer object wrapping `setInterval`, with automatic cleanup when component gets destroyed.
 * @param handler timer interval handler. If omitted, handler must be provided on the first restart.
 */
export function useTimer(handler?: () => void): Timer {
  let interval: number | null = null

  onUnmounted(() => {
    if (interval != null) window.clearInterval(interval)
  })

  return {
    restart(time, newHandler) {
      if (newHandler != null) {
        handler = newHandler
      }
      if (interval != null) window.clearInterval(interval)

      if (handler != null) {
        interval = window.setInterval(handler, time)
      } else {
        console.warn('Trying to restart timer without any handler')
      }
    },
    cancel() {
      if (interval != null) window.clearInterval(interval)
    },
  }
}

/**
 * Wait for observable condition.
 *
 * @param condition the condition to wait for. Promise resolves when this becomes true
 * @param until the condition to stop waiting. Promise rejects when this becomes true
 */
export function waitFor(condition: () => boolean, until?: () => boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    const unwatch = watchEffect(() => {
      if (condition()) {
        unwatch()
        resolve()
      } else if (until?.() ?? false) {
        unwatch()
        reject()
      }
    })
  })
}
