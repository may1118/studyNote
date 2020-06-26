# slot

决定所携带的内容插入到指定的某个位置,从而使模板分块,具有模块化的特性和更大的重用性.

```html
    <div id="app">
      <home>
        <template v-slot:other="{index}">
          {{index}}
        </template>
      </home>
    </div>

    <script>
      new Vue({
        components: {
          home: {
            template: `
            <div>
              <slot name="other" v-for="(item,index) of info" :item="item" :index="index">default<br /></slot> 
            </div>`,
            data() {
              return {
                info: ['a', 'b', 'c', 'd']
              };
            }
          }
        }
      }).$mount('#app');
    </script>
```

