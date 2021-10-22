import { containEvent } from './contain-event'

class ContainEventTester {
  @containEvent
  public testContainEvent(event: Event): boolean {
    return event.defaultPrevented
  }
}

describe('containEvent', () => {
  it('should call preventDefault and stopPropagation on first event argument it can find', () => {
    // arrange
    const event = new Event('foo', {
      bubbles: true,
      cancelable: true,
      composed: false,
    })
    const containEventTester = new ContainEventTester()
    jest.spyOn(event, 'stopPropagation')
    jest.spyOn(event, 'preventDefault')

    // act
    const returnValue = containEventTester.testContainEvent(event)

    // assert
    expect(event.preventDefault).toHaveBeenCalled()
    expect(event.stopPropagation).toHaveBeenCalled()
    expect(event.defaultPrevented).toBeTruthy()
    expect(returnValue).toBeTruthy()
  })
})
