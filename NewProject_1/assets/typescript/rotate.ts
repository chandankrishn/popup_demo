
import { _decorator, Component, Node, tween, Vec3, Sprite, repeat, Button, SpriteFrame, Event, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Rotate
 * DateTime = Sun Sep 05 2021 19:47:40 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = rotate.ts
 * FileBasenameNoExtension = rotate
 * URL = db://assets/typescript/rotate.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */



@ccclass('Rotate')
export class Rotate extends Component {
   
    @property(Button)
    abc=[];
    @property(SpriteFrame)
    image:SpriteFrame=null;
    @property(Button)
    jkl:Button=null;
    
  
    close(event: Event,content : string)
    {
        console.log(" Task truggered");
        tween(this.jkl.node)
        .to(0.5,{scale : new Vec3(0,0,0)})
      
        .start();
        tween(this.abc[4].node)
        .delay(0.2)
        .to(0.5,{scale: new Vec3(0,0,0)})
        .delay(0.2)
        .start();


        
        for(let i=0;i<4;i++)
        {
            tween(this.abc[i].node)
            .to(0.5,{scale: new Vec3(1,1,1)})
            .start();

        }
        
      

    }


    rotate(event: Event,content :string)
    {
        
        
        let jk:number[]=new Array();
        let j:number=0;
    
        for(let i=0;i<this.abc.length;i++)
        {
            
            if(parseInt(content)!=i)
            {
                console.log(`Index added ${j}`);
                 jk[j]=i;
                 ++j;
            }
        }
        for(let i=0;i<jk.length;i++)
        {
            tween(this.abc[jk[i]].node)
            .to(0.3,{scale : new Vec3(0,0,0) })
            .start();
        }
        console.log("Button pressed");
        console.log(content);
        tween(event.currentTarget)
       .to(0.2, { scale: new Vec3(0,1,1) }, {})
       .call(()=>{this.abc[parseInt(content)].getComponent(Sprite).spriteFrame=this.image;})
       .to(0.2,{scale : new Vec3(1,1,1)},{})
       .delay(1)
       .to(0.2,{scale : new Vec3(0,0,0)})
       .start();
       tween(this.abc[4].node)
      .delay(1.5)
      .to(0.5,{scale : new Vec3(1,1,0)})
      .call(()=>{console.log("Hey! its tweeening !")})
      .start();

      tween(this.jkl.node)
      .delay(1.7)
      .to(0.5,{scale : new Vec3(1,1,1)})
      .start();

   
    


      
    
      
    }

    // [2]
    // @property
    // serializableDummy = 0;
    

    start () {
        // [3]
        tween(this.node)
        .to(1,{angle : 360})
        .start();

        /** Easing Node, here will ease the Node's position property */
      

    }
    flip()
    {

        
    }
    onLoad()
    {
       

    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
