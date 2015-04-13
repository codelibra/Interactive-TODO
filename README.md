# Interactive-TODO
This is a todo/note taking application which is built on the MEAN framework.
It will eventually provide various ways of accessing todo's.
It is also a note keeper application.
People can save notes [specially programmers],  which can be then easily searched and reused.
The application will be completely programmer centric, giving ways to add todo's via
command line :)
android
web etc..

Eventually all this will be synced over dropbox!!



Since the basic setup is done,
the next hurdle is to think about the model of todo.

#Todo Object:

name -- the basic motto of the todo Ex: calling mother
due date and time -- the deadline Ex: 14 April, Tuesday 5pm 2015
priority --  On a scale of 5, what is the priority of the given todo  Ex: 2
group -- this is to divide the todo's into groups, which should be created before hand Ex: personnal
subtodo -- dividing the todo into a array of subtodo Ex: remind about wedding, remind about bills


#UI:
1. Add a UI to the application using angular js
2. Left side should have a navigation bar with the todo grouped by groups
3. each group should have it's corresponding todo
4. clicking on a particular todo will show it's details in the center
5. we can update a todo from the centre panel


Make changes to the index.html and the UI services to show the data in place.
2 controllers maincontroller and todo controller.

1. there must be a sidebar.
2. sidebars should show the todo in respective groups
3. when clicking on  a todo in the sidebar, the same should expand in the centre
4. the centre should be completely editable after clicking the edit button
5. it should allow the addition of subtasks, changing the priority, changing the title etc.
