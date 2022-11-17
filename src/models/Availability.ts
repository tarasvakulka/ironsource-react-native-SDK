import * as t from 'io-ts'

/**
 * Used for Event Listeners
 *
 * Not exposed as part of the modules.
 */

export const availabilityCodec = t.type({
  isAvailable: t.boolean,
})

export type Availability = t.TypeOf<typeof availabilityCodec>
