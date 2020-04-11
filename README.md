# Personal Library Refactored (MVC)


### Requirements
Refactor the Personal Library activity using the MVC structure.
There should be a connection.js, which is pretty much the same,
a server.js which requires the connection, then requires the controllers.

The html controller is pretty much the same as the previous html route,
but the API routes have been split up.

Now there is a Note Controller, and a Book Controller calling the APIs, 
and they look cleaner because they use methods created in the Models. 

The Book and Note Models, book.js and note.js, are more specific and cleaner because they call the ORM.

The ORM is is the only javascript file that needs to have SQL in it, 
making the others cleaner, while this file finally puts the user's actions into terms MySQL can understand,
and interacts with the databse. 

### My Status

Technically I follow all of those requirements, 
but I got a little moxed up along the way. 

I believe the ORM should have the following functions:

selectAll()
selectOne()
create()
delete()

and the note.js and book.js should pass their specific values into those functions,
to do their specific actions. 

But, as is, all of the ORM's functions are specific to either books or notes. 
Currently, I've just added an extra step to the flow of logic.

That being said, I understand where I would go with this if I continued it. 

Except also the notes stopped working and I don't see why but I didn't test them until later.