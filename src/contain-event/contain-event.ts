/** Prevents default event behavior and stops propagation. */
export const containEvent: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  const fn = descriptor.value as Function

  descriptor.value = function (...args: any[]) {
    const event = args.find(arg => arg instanceof Event) as Event
    event.preventDefault()
    event.stopPropagation()
    return fn.apply(this, args)
  }
}
