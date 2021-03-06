Types =

  getTypeOf: (object) ->
    Object.prototype.toString.call(object).slice(8, -1)

  isType: (object, type) ->
    if object? then this.getTypeOf(object) == type else object == type

  isObject: (object) -> object && typeof object == 'object'

  isObjectLiteral: (object) -> this.isType(object, 'Object')

  isFunction: (object) -> typeof object == 'function'

  isArray: (object) -> this.isType(object, 'Array')

  isString: (object) -> this.isType(object, 'String')

  isBoolean: (object) -> this.isType(object, 'Boolean')

  isNumber: (object) -> !isNaN(object) && this.isType(object, 'Number')
