// You can turn your function into a generic function by adding <T> after the function name
// This will accept any type and infer the type automatically
const typeExample =<T>(arg: T) => {
    return arg
}
// Hover your mouse over the function name to see the type inference, Super nice!
typeExample({
    name: 'John',
    age: 42
})
typeExample(2)

//  We can also constrain the type to a specific type
//  This example will only accept an object with a name property
const constrainedTypeExample =<T extends {name: string}>(arg: T) => {
    return arg
}

constrainedTypeExample(`Can't do this!`)
// This will work
constrainedTypeExample({
    name: 'John',
})
// This wont
constrainedTypeExample({
    age: 2
})

// You'll get autocompletiong here for name, but not age.
const test = constrainedTypeExample.name


// This is a generic type, you can think of this like a javascript function that accepts any type
// and returns an inferred type, of the data that was passed in. 
type GenericExample<T> = T

// Mental modal to have when looking at a generic type
const mentalModal = (t:any) => {
    return t
}

 const genericString: GenericExample<string> = 'Hello World'
 const genericNumber: GenericExample<number> = 42
 const genericBoolean: GenericExample<boolean> = true

// This function expects a string
const expectsString =(arg: GenericExample<string>) => {
   return arg
}

expectsString('Hello World')
expectsString(2)

// This function can accept any type and it will automatically infer the type
const automaticallyInfersAny =<T>(arg: GenericExample<T>) => {
    return arg
}

automaticallyInfersAny(2)
automaticallyInfersAny('Hello World')
automaticallyInfersAny({
    name: 'John',
    age: 42
})
automaticallyInfersAny([1,2,3,4,5])
automaticallyInfersAny(true)










