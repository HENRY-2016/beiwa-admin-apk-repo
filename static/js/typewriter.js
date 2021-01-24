

let greetingsarry =     [
                            "I am thrilled and honoured to share this expressional message with you.I feel blessed to say that am your greatest admirer.I had never held as much admiration for a person as i do for you.You truly are an inspirational individual and a blessing in anyone's life",
                            "I dont just admire and respect you because you are older than me,I have so much admiration for you because of who you are and what you stand for",
                            "My admiration for you continues to grow.I hope everything you have been wshing for come true for you.Am very optimistic you know you are somebody I idolise and can't speak more highly of.",
                            "You are a friend of mine I may well put on a pedestal and look up to you greatly.But thats only because its where you belong",
                            "May this year bring the joy and happiness that your kind heart deserve.You only become better with age.with each year passing,you just become better than before.",
                            "I cherish and adore you,the time you step into the agency banking and your continued support",
                            "THANK YOU"
    
                        ]

let songlyricsarry =    [
                            " I'm going under and this time I fear there's no one to save me",
                            " This all or nothing really got a way of driving me crazy",
                            " I need somebody to heal",
                            " Somebody to know",
                            " Somebody to have",
                            " Somebody to hold",
                            " It's easy to say",
                            " But it's never the same",
                            " I guess I kinda liked the way you numbed all the pain",


                            " Now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",


                            " I'm going under and this time I fear there's no one to turn to",
                            " This all or nothing way of loving got me sleeping without you",
                            " Now, I need somebody to know",
                            " Somebody to heal",
                            " Somebody to have",
                            " Just to know how it feels",
                            " It's easy to say but it's never the same",
                            " I guess I kinda liked the way you helped me escape",


                            " Now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",


                            " And I tend to close my eyes when it hurts sometimes",
                            " I fall into your arms",
                            " I'll be safe in your sound 'til I come back around",


                            " For now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",


                            " But now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved eeeee",

                        ]

function StartTypingGreetingText ()
{
    if ($(".greeting-text").length == 1) 
    { 
        let typed = new Typed(".greeting-text", { 
            strings:greetingsarry,
            typeSpeed: 100, 
            loop: true, 
            backDelay: 8000, 
            backSpeed: 30, 
        }); 
    }
} 

function StartTypingLyricsText ()
{
    if ($(".text-slider").length == 1) 
    { 
        let typed = new Typed(".text-slider", { 
            strings:songlyricsarry,
            typeSpeed: 50, 
            loop: true, 
            backDelay: 1000, 
            backSpeed: 25, 
        }); 
    }
} 
