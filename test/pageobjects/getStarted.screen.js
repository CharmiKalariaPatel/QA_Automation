const Utils = require("./utils");

class getStarted extends Utils{

    async getStartedbtn(){
        const elem = await $("//*[@text='Get Started']")
        await this.waitToBeClickable(elem);
        return elem;
    }

    async selectNbaLeague(){
        const elem = await $('//android.widget.LinearLayout[@index="3"]')
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async continueBtn(){
        const elem = await $("//*[@text='Continue']");
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async locationPopupMaybeLater(){
        const elem = await $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/btn_disallow"]');
        //cconst elem = await $("//*[@text='Maybe Later']")
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async selectNbaTeam(){
        const elem = await $('//android.widget.LinearLayout[@index="0"]');
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async doneBtn(){
       const elem = await $("//*[@text='Done']");
       await this.waitToBeClickable(elem);
       return elem;   
     }
    
    async donotallow(){
       //const elem = await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
       const elem = await $("//*[@text='Don’t allow']");
       await this.waitToBeClickable(elem);
       return elem;   
    }

    async dismissModal(){
       const elem = await $('//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/dismiss_modal"]');
       await this.waitToBeClickable(elem);
       return elem;   
    }

    async leagueTitle(){
        const elem = await $("//*[@text='My Leagues']");
        await this.waitToBeClickable(elem);
        return elem;   
    }
    
    async selectMbaGame(){
        const elem = await $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/league_name_text" and @text="MLB"]');
        await this.waitToBeClickable(elem);
        return elem;   
    }

    async verifyLeagueTitle(){
        const elem = await $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/titleTextView"]');
        await this.waitToBeClickable(elem);
        return elem;   
    }

    async backNavigation(){
        const elem = await $('//android.widget.ImageButton[@content-desc="Navigate up"]');
        await this.waitToBeClickable(elem);
        return elem;   
    }
    
    async firstGame(){
        const elem = await $('(//android.view.ViewGroup[@resource-id="com.fivemobile.thescore:id/scores_container"])[1]')
        await this.waitToBeClickable(elem);
        return elem;   
    }

    async closePopup(){
        const elem = await $('//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/close"]');
        await this.waitToBeClickable(elem);
        return elem;   
    }
       
    async homeTeam(){
        const elem = await $('//android.view.ViewGroup[@resource-id="com.fivemobile.thescore:id/top_team"]');
        //const elem = await $('//android.view.ViewGroup[@index="2"]');
        await this.waitToBeClickable(elem);
        return elem;   
    }
    
    async playerStat(){
        const elem = await $("//*[@text='PLAYER STATS']");
        await this.waitToBeClickable(elem);
        return elem;   
    }
    
    async firstPlayerSelection(){
        const elem = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fivemobile.thescore:id/recyclerView"]/android.view.ViewGroup[2]');
        await this.waitToBeClickable(elem);
        return elem;   
    }

    //move under tab bar
      
}
module.exports = new getStarted();