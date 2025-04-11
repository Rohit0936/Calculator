
let num=[['AC','C','%','/'],
         ['7','8','9','x'],
         ['4','5','6','-'],
         ['1','2','3','+'],
         ['00','0','.','=']];
         
function loadpage()
{
     //let grid=document.createElement("table");
     let grid=document.createElement("table");
     let count=0;
     let str="";
     let temp="";
     let choice=0;
     let temp1="";
     let len=0;
     let end=0;
     
     grid.style.marginTop="10px";
     let first=0,second=0,total;
     for(let i=0;i<5;i++)
     {
                let row=document.createElement("tr");
         
         for(let j=0;j<4;j++)
         {
            let col=document.createElement("td");
            
            let btn=document.createElement("input");
            btn.setAttribute("type","button");
            btn.setAttribute("id",++count);
            btn.setAttribute("value",num[i][j]);
            
           
             btn.style.backgroundColor="grey";
             if(btn.id==20)
             {
             	 btn.style.backgroundColor="#D84315";
             }

            btn.style.color="white";
            btn.style.width="60px";
            btn.style.height="56px";
           btn.style.borderRadius="50%";
            btn.style.margin="3px";
            btn.style.fontSize="20px";
             btn.addEventListener('click',function(){
             
                      let textInput=document.getElementById("txt");
                      str=textInput.value;
                      len=str.length;
                      if(btn.value!="AC" && btn.value!="=" && btn.value!="C")
                      {
                        str=str+btn.value;
                        textInput.value=str;
                      }
                      
                        
                      if(btn.value!="+" && btn.value!="-" && btn.value!="x" && btn.value!="-" && btn.value!="%" && btn.value!="/" && btn.value!="Ac"  && btn.value!="=" && btn.value!="C")
                      {
                         temp=temp+btn.value;
                      } 
                    
                      if(btn.value=="C" && btn.value!="+" && btn.value!="-" && btn.value!="x" && btn.value!="-" && btn.value!="%" && btn.value!="/" && btn.value!="Ac"  && btn.value!="=")
                        {
                          let tempLen=temp.length;
                          ++end;
                          if(len>0)
                          {
                            str=str.substring(0,len-end);
                          }
                          if(tempLen>0)
                          {
                            temp=temp.substring(0,tempLen-end);
                          }
                          
                         
                         // alert(temp);
                          textInput.value=str;
                          
                          end=0;
                        }

                       if(btn.value=="+")
                       {
                          
                           first=parseFloat(first)+parseFloat(temp);
                           temp="";
                           //console.log(temp);
                         choice=1;

                         // textInput.value="";
                       }
                      else if(btn.value=="x")
                      {
                        if(first==0)
                          {
                          first=1;
                         }
                         
                          first=parseFloat(first)*parseFloat(temp);//12+12+24
                          temp="";
                          choice=2;
                         // textInput.value="";
                       }

                     else if(btn.value=="/")
                       {
                          first=parseFloat(first)+parseFloat(temp);//12+12+24
                          temp="";
                          choice=3;                     
                       }
                       
                        else if(btn.value=="%")
                       {
                          first=parseFloat(first)+parseFloat(temp);//12+12+24
                          temp="";
                          choice=4;        
                       }

                      else if(btn.value=="-")
                       {
                          if(parseFloat(temp)>parseFloat(first))
                          {
                            first=parseFloat(temp)-parseFloat(first);//2-3
                          }
                          else
                          {
                            first=parseFloat(first)-parseFloat(temp);//2-3
                          }
                         
                          //prty="-";
                          temp="";
                          choice=5;
                        }

                       else if(btn.value=="=")
                       {
                         
                         switch(choice)
                         {
                            case 1:
                            {
                              if(temp!="")
                              {
                                second=parseFloat(temp); 
                              }
                              else
                              {
                                second=0;
                              }
                               
                              
                              total=parseFloat(first)+parseFloat(second); 
                              
                             textInput.value=total; 
                                temp=total;
                                first=0;
                                break;
                            }
                            case 2:
                            {
                              second=parseFloat(temp); 
                              
                              total=first*second; 
                             textInput.value=total; 
                              temp=total;
                                first=0;
                            
                               break;
                            }
                            
                             case 3:
                            {
                              second=parseFloat(temp);
                              if(second!=0)
                              { 
                                total=first/second; 
                                textInput.value=total; 
                                temp=total;
                                first=0;
                                }
                                else
                                {
                                   textInput.value="Cannot divide by 0";
                                }
                            
                               break;
                            }

                             case 4:
                            {
                              second=parseFloat(temp);
                              
                                total=first%second; 
                                textInput.value=total; 
                                temp=total;
                                first=0;
                                                            
                               break;
                            }

                             case 5:
                            {
                              second=parseFloat(temp);
                               
                                total=first-second; 
                                textInput.value=total; 
                                temp=total;
                                first=0;
                                                            
                               break;
                            }

                         }
                         
                         
                       }
                       
                       else if(btn.value=="AC")
                       {
                            textInput.value="";
                            temp="";
                            first=0;
                            second=0;
                            total=0;
                       }
                       
                       
                                              
                   });
            col.appendChild(btn);
            row.appendChild(col);
         }
        grid.appendChild(row);

     }
     
     let main=document.getElementById("btn");
     main.appendChild(grid);
           
}