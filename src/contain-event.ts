export const containEvent = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const fn = descriptor.value as Function

  descriptor.value = function (...args: any[]) {
    const event = args.find(arg => arg instanceof Event) as Event
    event.preventDefault()
    event.stopPropagation()
    fn.call(this, ...args)
  }
}
