### 2019-7-21
- URI:统一资源标识符，用来唯一标识互联网上的信息资源
包括URL和URN
- URL：统一资源定位器
- URN：永久统一资源定位符

HTTP方法：用来定义对于资源的操作

HTTP CODE：定义服务器对请求的处理结果，各个区间的CODE有各自的语义；好的HTTP服务可以通过CODE判断结果

跨域请求：
1. 更改请求头配置（特定的请求头）
2. fetch请求（但是有一定的限制，只允许一些规定好的请求头）

缓存（cache-control）
- 可缓存行：public/private/no-cache
- 到期：max-age = <seconds> s-maxage = <seconds>(代理服务器) max-stale = <seconds> 过期缓存可使用时间
- 重新验证：must-revalidate proxy-revalidate
- 其他：no-store：需要经过服务器验证才能使用本地服务器缓存    no-transform：不可改变返回内容

