import Vue from "vue";
import { ComponentOptions } from "vue";
import { RouteConfig } from "vue-router";
import { INoticia } from "../../../shared/models/INoticia";
export default class NoticiasComponent implements ComponentOptions<Vue> {
    data(): {
        noticias: INoticia[];
    };
    mounted(): {
        noticias: INoticia[];
    };
}
export declare const NoticiasRoute: RouteConfig;
