# VueJS

# Clone Project From Github

```sh
$git clone https://github.com/l0oktaan/VueJS.git
```

#ถ้าคุณไม่ได้ทำการ clone หรือเชื่อมต่อไปยัง remote repository สามารถทำการเพิ่ม remote ด้วยคำสั่งดังนี้

```sh
$git remote add origin https://github.com/l0oktaan/VueJS.git
$git remote -v
origin  https://github.com/l0oktaan/VueJS.git (fetch)
origin  https://github.com/l0oktaan/VueJS.git (push)
```

#add files to track
```sh
$git add *
$git commit -m "message"
```



#Disable Re-Rendering with v-once
```HTML
<h1 v-once>{{title}}</h>
```

#Output RAW HTML

```HTML
...
<p v-html="mylink"></p> 
```
```js
...
mylink = "<a href='http://www.google.com'>Google</a>"
```
Output
<a href='http://www.google.com'>Google</a>

#Listing to Event
```
<button v-on:click="increase">click me</button>
...
increase : function(){
    this.count++;
}
```
```
...
<p v-on:mousemove="updateCoordinates">พิกัด : {{ x }} , {{ y }}</p>
...
updateCoordinates : function(e){
this.x = e.clientX;
this.y = e.clientY;
}
...
```
#Passing arguments with Events
```
...
<button v-on:click="increase(2, $event)">click me</button>
...
increase : function(step, e){
    this.count += step;
}
...
```
#Event Modify
```
...
<p v-on:mousemove="updateCoordinates">
    พิกัด : {{ x }} , {{ y }} 
    - <span v-on:mousemove="dummy">DEAD SPOT</span>
    - <span v-on:mousemove.stop="">DEAD SPOT 2</span>
</p>
...
dummy : function(e){
    event.stopPropagation();
}
...
```
#Keyboard Event
```
...
<input type="text" v-on:keyup.enter.space="alertMe">
...
alertMe : function(){
    alert("Alert!");
}
...
```
#Write javascrip code in template
```
...
<button v-on:click="count++">click me 2</button>
<p>{{ count * 2 > 10 ? 'เกิน 10 แล้ว' : 'ยังน้อยกว่า 10' }}</p>
...
```
#Two way data bind
```
...
<input type="text" v-model="name">
<p>{{ name }}</p>
...
```
#Use computed property
The functions in computed property not refresh went DOM refresh.
```
...
<button v-on:click="count++">Increase</button>
<button v-on:click="count--">Decrease</button>
<button v-on:click="count2++">Increase 2</button>
<p>Count : {{ count }} | {{ count2 }}</p>
<p>Result : {{ result() }} | {{ output }}</p>
...
Javascript
...
new Vue({
el : '#app',
data : {
    .....
    count : 0,    
    count2 : 0
},
computed : {
    output : function(){
        console.log('compute');
        return this.count > 5 ? 'มากกว่า 5' : 'ไม่มากกว่า 5';
    }
},
methods : {    
    result : function(){
        console.log('method');
        return this.count > 5 ? 'มากกว่า 5' : 'ไม่มากกว่า 5';
    }            
}
});
...
```
#Use watch propery
```
...
new Vue({
    el : '#app',
    data : {
        .....
        count : 0,    
        .......
    },
    computed : {
        .....
    },
    watch : {
        count : function(value){
            var vm = this;                
            setTimeout(function(){
                vm.count = 0;
            },2000);
        }
    },
    methods : {    
        ....          
    }
});
...
```
#Shorthand
```
<button @click="changeLink">Change Link</button>
<a :href="link">Link</a>

```
- v-on:click => @click
- v-bind:href => :href

#Dynamic CSS
```
...
.demo{
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
}
.red{
    background-color: red;
}
...
<div 
    class="demo" 
    @click="attachRed = !attachRed"
    :class="{red: attachRed}">
</div>
...
new Vue({
    el : '#app',
    data : {
        ...
        attachRed : false,    
        ...
    },
    computed : {
        ...
    },
    watch : {
        ...
    },
    methods : {    
        ...          
    }
});
```

#Dynamic CSS with Object
```
...
<div 
    class="demo" 
    @click="attachRed = !attachRed"
    :class="divClasses">
</div>
...
new Vue({
    el : '#app',
    data : {
        ...
        attachRed : false,    
        ...
    },
    computed : {
        ...
        divClasses: function(){
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    },
    watch : {
        ...
    },
    methods : {    
        ...          
    }
});
```
#Dynamic CSS with Name
```
...
<div class="demo" :class="color"></div>
<div class="demo" :class="[color, {red: attachRed}]"></div>
<input type="text" v-model="color">
...
new Vue({
    el : '#app',
    data : {
        ...
        attachRed : false,
        color: 'green'    
        ...
    },
    computed : {
        ...        
    },
    watch : {
        ...
    },
    methods : {    
        ...          
    }
});
```
#Dynamic CSS without class
```
...
<div class="demo" :style="{backgroundColor: color}"></div>
<div class="demo" :style="myStyle"></div>
<div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
<input type="text" v-model="color">
<input type="text" v-model="width">
...
new Vue({
    el : '#app',
    data : {
        ...
        color: 'green',
        width: 100   
        ...
    },
    computed : {
        ...
        myStyle: function(){
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            };
        }        
    },
    watch : {
        ...
    },
    methods : {    
        ...          
    }
});
```
#Condition Rendering with v-if
```
...
<div id="app">
    <p v-if="show">You can see me!</p>
    <p v-else>Now you see me!</p>
    <p>Do you also see me!</p>
    <button @click="show = !show">Switch</button>
</div>
<script>
new Vue({
    el : '#app',
    data : {
        show: true
    },
    computed : {
        
    },
    watch : {
        
    },
    methods : {
        
    }
});
</script>
...
new Vue({
    el : '#app',
    data : {
        ...
        color: 'green',
        width: 100   
        ...
    },
    computed : {
        ...
        myStyle: function(){
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            };
        }        
    },
    watch : {
        ...
    },
    methods : {    
        ...          
    }
});
```

#Install vue_cli
```
$npm install -g vue-cli
...
$vue init webpack-simple#1.0 vue-cli

$cd vue-cli
$npm install
$npm run dev
