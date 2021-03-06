import { Vec2 } from "./MyMath";
//////
export class EventCentre{
    public static instance:EventCentre;
    public static EType:EType;
    public static init():void{
        EventCentre.instance = new EventCentre();
        EventCentre.EType = new EType();
        EventCentre.init = ()=>{};
    };

    private _centre:Laya.EventDispatcher = new Laya.EventDispatcher();

    public on(type:string, caller:any, listener:Function, args?:any[]):void{
        this._centre.on(type,caller,listener,args);
    }

    public event(type:string, args?:any):void{
        this._centre.event(type,args);
    }

    public off(type:string, caller:any, listener:Function){
        this._centre.off(type, caller, listener);
    }


    private constructor(){}
}


class EType {
    public LEAVE(pos:Vec2, identity:string):string{
        return `${identity}:COLLISION_EVENT_LEAVE_FROM(${pos.x}|${pos.y})`;
    }
    public ENTRE(pos:Vec2, identity:string):string{
        return `${identity}:COLLISION_EVENT_ENTRE_TO(${pos.x}|${pos.y})`;
    }
}