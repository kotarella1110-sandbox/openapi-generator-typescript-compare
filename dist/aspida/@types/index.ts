/* eslint-disable */
export type ExampleRef = {
  oneOf: OneOf
  arrayOneOf: ArrayOneOf
  nullableEnum: NullableEnum
  date: Date
  dateTime: DateTime
}

export type OneOf = string | number | number | boolean | number[] | number[] | boolean[] | string[] | FooBarObject[] | FooBarObject

export type ArrayOneOf = OneOf[]

export type FooBarObject = {
  foo: string
  bar: number
}

export type NullableEnum = '00' | '01' | '02' | null

export type Date = string

export type DateTime = string

export type ExampleNonRef = {
  oneOf: string | number | number | boolean | number[] | number[] | boolean[] | string[] | {
    foo: string
    bar: number
  }[] | {
    foo: string
    bar: number
  }

  arrayOneOf: (string | number | number | boolean | number[] | number[] | boolean[] | string[] | {
    foo: string
    bar: number
  }[] | {
    foo: string
    bar: number
  })[]
  nullableEnum: '00' | '01' | '02' | null
  date: string
  dateTime: string
}
