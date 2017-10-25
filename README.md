# Koa with GraphQL

koa2 + graphQL

## Install Dependencies:

```
npm install
```

## Run Project

```
npm run dev
```

## GraphQL Interface for test

```
http://localhost:5555/Ihello
```

## GraphQL

### Query

```
query {
  hello {
    _id,
  	email,
    lastIP,
  }
}
```

## Add

```
mutation {
  add(info: {email: "a", lastIP: "aa"}) {
    _id,
    email,
    lastIP
  }
}
```

## Update

```
mutation {
  update(options: { _id: "59f005556ab4a647058b4781", email: "bb", lastIP: "bbbbb" }) {
    _id
    email
    lastIP
  }
}
```

## Remove

```
mutation {
  remove(ids: ["59f00231068f5245491aa7c8"]) {
    _id,
    email,
    lastIP
  }
}
```
