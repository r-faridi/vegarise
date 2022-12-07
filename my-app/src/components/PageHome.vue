<template>
    <header v-html="layoutHeaderHtml"></header>
    <div v-html="html"></div>
    <footer v-html="layoutFooterHtml"></footer>
</template>
<script>
//import axios from 'axios';
import home from "../../public/data/home.json";
import AboutUs from "../../public/data/AboutUs.json";
import layout from "../../public/data/layout.json";
import post from "../../public/data/post.json";
import Services from "../../public/data/Services.json";
//import "../../public/js/Utilities.js";

import { useRouter, useRoute } from 'vue-router';
import { Loading } from '../../public/Utilities.js';
export default {
    data() {
        return {
            html: "",
            layoutHeaderHtml: "",
            layoutFooterHtml: "",
            btn: "",
            router: useRouter(),
            route: useRoute()
        }
    },
    watch: {
        $route() {
            console.log(this.route.params.page);
            // axios.get(`/entity/CallView?ViewName=V_PageTrByPage&Where=page_Name='${this.route.params.page}'&Take=1`
            // ).then((res) => {
            //     this.html="loading";
            //     this.html = res.data.result[0].patr_Html;
            //     document.getElementById('StyleTag').append(res.data.result[0].patr_CSS);

            // }
            // ).catch((err) => console.log(err));

            if (this.route.params.page == 'Home') {
                this.html = home.result[0].patr_Html;
                document.getElementById('StyleTag').append(home.result[0].patr_CSS);
            }
            if (this.route.params.page == 'AboutUs') {
                this.html = AboutUs.result[0].patr_Html;
                document.getElementById('StyleTag').append(AboutUs.result[0].patr_CSS);
            }
            if (this.route.params.page == 'post') {
                this.html = post.result[0].patr_Html;
                document.getElementById('StyleTag').append(post.result[0].patr_CSS);
            }
            if (this.route.params.page == 'Services') {
                this.html = Services.result[0].patr_Html;
                document.getElementById('StyleTag').append(Services.result[0].patr_CSS);
            }
            //  console.log(layout);


            // this.html = layout.result[0].patr_Html;
            // document.getElementById('StyleTag').append(layout.data.result[0].patr_CSS);

            const router = this.router;
            const route = this.route;
            setTimeout(() => {

                var links = document.getElementsByTagName('a');
                for (var i = 0, il = links.length; i < il; i++) {
                    links[i].onclick = function clickHandler(e) {
                        e.preventDefault();
                        router.replace({
                            name: route.name,
                            params: {
                                page: e.currentTarget.getAttribute("href").split("/")[1],
                            }
                        })
                    }
                }
                Loading(0);
            }, 10000);

        }
    },
    mounted() {
        //MenuToggle();
        Loading(1);


        if (this.route.params.page == 'Home') {
            console.log(home);
        }
        if (this.route.params.page == 'AboutUs') {
            console.log(AboutUs);
        }
        if (this.route.params.page == 'post') {
            console.log(post);
        }
        if (this.route.params.page == 'Services') {
            console.log(Services);
        }


        this.layoutHeaderHtml = layout.result.pltr_Header;
        this.layoutFooterHtml = layout.result.pltr_Footer;
        document.getElementById('StyleTag').append(layout.result.pltr_CSS);


        this.html = home.result[0].patr_Html;
        document.getElementById('StyleTag').append(home.result[0].patr_CSS);

        // axios.get(`/entity/GetById`, {
        //     params: {
        //         TableName: "pageLayoutTr",
        //         Fields: "pltr_CSS,pltr_Header,pltr_Footer",
        //         IdFielName: 'pltr_Id',
        //         Id: '1'
        //     }
        // }
        // ).then((res) => {
        //     this.layoutHeaderHtml = res.data.result.pltr_Header;
        //     this.layoutFooterHtml = res.data.result.pltr_Footer;
        //     document.getElementById('StyleTag').append(res.data.result.pltr_CSS);
        //     Loading(0);

        // }
        // );
        Loading(1);
        // axios.get(`/entity/CallView?ViewName=V_PageTrByPage&Where=page_Name='${this.route.params.page}'&Take=1`
        //     ).then((res) => {
        //         this.html = res.data.result[0].patr_Html;
        //         document.getElementById('StyleTag').append(res.data.result[0].patr_CSS);
        //         Loading(0);
        //     }
        //     ).catch((err) => console.log(err));

        Loading(1);
        const router = this.router;
        const route = this.route;
        setTimeout(() => {

            var links = document.getElementsByTagName('a');
            for (var i = 0, il = links.length; i < il; i++) {
                links[i].onclick = function clickHandler(e) {
                    e.preventDefault();
                    router.replace({
                        name: route.name,
                        params: {
                            page: e.currentTarget.getAttribute("href").split("/")[1],
                        }
                    })
                }
            }


            const plugin = document.createElement("script");
            plugin.innerHTML= ` document.getElementById('iwcjeh').addEventListener('click',function () {
        document.getElementById('ioptnk').classList.toggle('dropdown-content');
    });`
            
            plugin.async = true;
            document.head.appendChild(plugin);


            Loading(0);
        }, 10000);
    }

}
</script>
