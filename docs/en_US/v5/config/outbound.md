# outbounds
outbound

Outbound connections are used to send data to remote websites or the next level of proxy server. For available protocols, see the protocol list.

```json
{
  "protocol":"vmess",
  "settings":{},
  "sendThrough":"1.2.3.4",
  "tag":"demo",
  "streamSettings":{},
  "proxySettings":{},
  "mux":{}
}
```

> `protocol`: name of <outbound>

The name of the outbound protocol.

> `settings`: settings of <outbound>

The settings for the outbound protocol.

> `sendThrough`: string

The local address for creating connection.

> `tag`: string

The Tag of the outbound. This is used as an identifier for outbounds.

> `streamSettings`: [StreamObject](stream.md)

The stream settings for the outbound. This determine how the protocol data is transferred.

> `proxySettings`: [ProxyObject](#ProxyObject)

Forward Proxy(Proxy Chaining) settings.

> `mux`: [MuxObject](#MuxObject)

Connection multiplexor settings. 