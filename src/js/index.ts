import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"


const baseUrl = "http://info.futuredial.com/"


new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        taskid: "",
        id:"",
        imei:Number,
        status: "",
        modelNumber:"",
        sourceMake:"",
        sourceModel:"",
        color:"",
        batteryHealthValue:Number,
        
        
    },
    methods:
     { sayHello() 
        {
        

        }
    }
})