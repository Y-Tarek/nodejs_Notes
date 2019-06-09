const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const info = require('./playground/json.js');
const _ = require('lodash');
const yargs = require('yargs');

        //store userData
        // ***********************************************
        // var user = os.userInfo();
        // fs.appendFile('UserData',`useename:${user.username}`,function(err){
        //     if(err)
        //     console.log('error is:'+err);
        // });
        // ************************************************

        //require functions from another file
        // ***********************************************

        // var res =  notes.get_age(10,15);
        // console.log(res);

        // ***********************************************
         
        // npm packages 
        // ***********************************************

        //   var uniqAarray = _.uniq(['yasser',1,'yasser',1,2,3]);
        //   console.log(uniqAarray);
        //   var check = _.isString(200);
        //   console.log(check);
          
        // ***********************************************

        // Input from the user here just from command
        
        // ***********************************************
         
        //    console.log(process.argv);
        //    console.log(yargs.argv);
        // var argv = yargs.argv;
        // var command = argv._[0];
        //    console.log('Command:' + command);
        //     switch (command){
        //         case 'add':
        //         console.log('adding a new note');
        //         notes.addNote(argv.title);
        //         break;
        //         case 'remove':
        //         console.log('removing a  note');
        //         notes.RemoveNote(argv.title);
        //         break;
        //         case 'list':
        //         console.log('listing notes');
        //         notes.ListNotes();
        //         break;
        //         default: return 'do nothing';   
        //     }
           
           

        // ***********************************************

        // getting parsed json data

         // ***********************************************
        //   var data =  fs.readFileSync('info.json');
        //   var parsedData = JSON.parse(data);
        //   console.log(parsedData);
          
          
          // ***********************************************

          // append json data
          // ***********************************************
           var argv = yargs.argv;
           var command = argv._[0];
               if(command === 'add'){
                    var note = notes.addNote(argv.title,argv.body);
                    if(note != null)
                    console.log("Note Created",`Title:${note.title},body:${note.body}`);
                    else
                    console.log("wasnot added");    
               }
               else if(command === 'remove'){
                 var removed =  notes.RemoveNote(argv.title);
                 removed ? console.log("Removed successfully") : console.log("wasnot Removed");
               }

               else if(command === 'get'){
                    var note = notes.GetNote(argv.title);
                    note.length !== 0 ?
                     console.log("The Note title is:",note[0]['title']
                      ,"body:"
                       ,note[0]['body']):
                         console.log("Note wasnot found");     
               }

               else if(command === 'update'){
                    try{
                     var newNotes = notes.UpdateNote(argv.title,argv.newbody);
                     newNotes.map((element)=>{
                          if(element.body === argv.newbody){
                               console.log("Updated successfully");
                               
                          }
                     });
                    }catch(err){
                         console.log("wasnot updated:",err);
                         
                    }
               }
               else if(command === 'list'){
                  var Notes = notes.ListNotes();
                  Notes.length !== 0 ?
                  Notes.map((element)=>{
                       console.log(`Title: ${element.title}`,`Body: ${element.body}`) ;
                  })
                   : console.log("No Notes found");
                  
                  
               }

          
          // ***********************************************
