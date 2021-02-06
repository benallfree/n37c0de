# n37c0d3

n37c0d3 (netcode) is a Typescript-first, highly optimized binary data packing/unpacking and messaging protocol designed for bare-meta TCP communication such as between native apps and servers, or server-to-server.

- Typescript-first design: strong typing for message formats and mapping schemas
- Serialize/deserialize any predefined JSON structure to a compact binary format
- Compatible with Node and React Native (using rn-nodeify) environments
- 8-10x more compact than a JSON representation of the same data
- Miserly 13 byte message packet header
- Every message gets a unique ID
- Every message can be a reply to a previous message ID
- Fault-tolerant message boundaries alignment - rejects bad/outdated messages
- Up to 256 message types
- Support for string, float, int, Buffer, objects, and arrays of all those
- Maps back to a strongly typed TS object
- Ultra efficient memory management

# Installation

```
npm i n37c0d3
```

# Usage

First, define a type or two (Typescript only)

```typescript
type Login = {
  idToken: string
}

type Session = {
  uid: string
}
```

Then, provide schemas to tell n37c0d3 how to perform binary serialization/deserialization.

```typescript
const LoginSchema = {
  idToken: NetcodeTypes.String,
}

const SessionSchema = {
  uid: NetcodeTypes.String,
}
```

Finally, create a schema map that associates message type IDs with the schemas.

```typescript
enum MessageTypes {
  Login = 1,
  Session = 2,
}
const schemas: SchemaLookup = {
  [MessageTypes.Login]: LoginSchema,
  [MessageTypes.Session]: SessionSchema,
}
```

Now you can pack and unpack your message types at will!

```typescript
const { pack, unpack } = createNetcode(schemas)
const [packed] = pack<Login>(MessageTypes.Login, data)
const unpacked = unpack<Login>(packed)
```

# Prior Art

- struct
- c-struct
