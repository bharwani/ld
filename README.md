# LaunchDarkly Testing

**Built using Client-side NodeJS SDK**<br>
Assume node is already installed. Otherwise install node. 
## Build instructions

1. Install the LaunchDarkly Client-Side NodeJS SDK by running `npm init` into a directory.

2. Run `npm install launchdarkly-node-client-sdk@2.0.2 --save`

3. Edit `index.js` and the client-side ID in LD SDK's initialize():

```js
  const ldClient = LaunchDarkly.initialize("<CLIENT-ID></CLIENT-ID>", user);
```

4. Run the app using:
```
  node index.js 
```

### Thank you