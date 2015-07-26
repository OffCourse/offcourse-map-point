require './helpers'

describe "Todolist Item Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = []
    { @Component } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    cx = 1
    cy = 1
    strokeWidth = 1
    id = "2"
    @props  = { cx, cy, strokeWidth, id }

  describe "general", ->
    When  -> @subject  = renderElement @Component, @props 
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "point"
    And   -> !@classes.includes "point-is-complete"
    And   -> !@classes.includes "point-is-highlight"

  describe "item complete", ->
    Given ->
      @props.complete = true
    When  -> @subject  = renderElement @Component, @props 
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "point-is-complete"
    And   -> !@classes.includes "point-is-highlight"

  describe "item highlight", ->
    Given ->
      @props.highlight = true
    When  -> @subject  = renderElement @Component, @props 
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "point-is-highlight"
    And   -> !@classes.includes "point-is-complete"

  describe "hover item", ->
    Given  -> 
      @props.handleHover = sinon.spy()
      @subject = renderElement @Component, @props 
    When   -> TestUtils.SimulateNative.mouseOver(@subject);
    Then   -> expect(@props.handleHover).to.be.calledWith(@props.id, true);

  describe "click checkbox", ->
    Given  -> 
      @props.handleClick = sinon.spy()
      @subject     = renderElement @Component, @props 
    When   -> TestUtils.Simulate.click(@subject)
    Then   -> expect(@props.handleClick).to.be.calledWith(@props.id);
