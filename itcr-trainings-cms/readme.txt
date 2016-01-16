
Meteor Training Steps/Agenda

1. meteor create itcr-trainings-cms
	1.1 cd itcr-trainings-cms
	1.2 meteor
2. Now delete all files (???)
3. create following structure:
	/client // frontend code
	/server // backend code
	/lib    // code for both frontend and backend
	/public // static assets like images and other media
4. add necessary packages, we are going to use/need:
	4.1 Iron Router => meteor add iron:router
	4.2 Material Design UI => materialize:materialize
	4.3 User Accounts => useraccounts:core
	4.4 Login/Signup MD form styles => useraccounts:materialize
	4.5 Mongol (debug DB) => msavin:mongol
	4.6 Reactive Table => meteor add aslagle:reactive-table
5. Configure layout
	5.1 setup navbar/sidebar
	5.2 setup main container
	5.3 setup footer
	5.4 setup blog post container (card)
6. Add some data
	6.1 Create collection for 'posts'
	6.2 View added posts
		6.2.1 creating post template
		6.2.2 creating post handlers
		6.2.3 adding events
7. CRUD
	7.1 Modal for post creation
	7.2 Grid for managing posts
		7.2.1 Delete / Edit Posts buttons
?. Remove autopublish