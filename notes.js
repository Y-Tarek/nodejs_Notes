const fs = require('fs');

       var fetchNotes = ()=> {
           try{
               var orginalJson = fs.readFileSync('yasser.json');
               return JSON.parse(orginalJson);
           }catch(e){
               console.log(e); 
           }
       };

       var saveJsonData = (data) => {
           fs.writeFileSync('yasser.json',data,function(err){
               if(err)
               console.log(err);
           });
       };


        addNote = (title,body) => {
                var notes = fetchNotes();
                note = {
                title:title,
                body:body
                }
                var duplicatenotes = notes.filter((note)=>note.title === title);
                if(duplicatenotes.length === 0){
                    notes.push(note);
                    note_data = JSON.stringify(notes);
                    saveJsonData(note_data);
                    return note;
                    
                }else{
                    console.log('cannot append exsisting data');
                    
                }
            }

            remove_note = (title) => {
            var AllNotes = fetchNotes();
            var newNotes = AllNotes.filter((note)=>note.title!==title);
             saveJsonData(newNotes);
             return AllNotes.length !== newNotes.length;
            }

            get_Note = (title) => {
             var allnotes = fetchNotes();
             var myNote = allnotes.filter((note) => note.title === title);
             return myNote;
             

            } 

            var update_Notes = (title,newbody) => {
              var AllNotes = fetchNotes();
               AllNotes.map((element) => {
                   if(element.title === title){
                       element.body = newbody;
                    }
                });
                 saveJsonData(AllNotes);
                 return AllNotes;
            };
            var ListNotes = () => {
             console.log("Notes are:");
              var Notes = fetchNotes()
               return Notes;
            };
            
            module.exports = {
                addNote:addNote,
                RemoveNote:remove_note,
                GetNote:get_Note,
                UpdateNote:update_Notes,
                ListNotes
            };