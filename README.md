# Kural

> Social networking for philosophers

*focused discussions, love for truth, clean knowledge, everyone should be a philosopher,*

## Phase 0 : Terminal App

* It is just a search engine
* Gets a keyword from user 
* Serves a list of hyperlinks to questions in Quora, Arxiv and SO


## Phase 1 : UI App

* Simple UI
* 2 divs
	- search box
	- search results


## Phase 2 : User Oriented App

* User properties
	- name
	- email
	- subscriptions
* User Profile page : list properties
* User login/Account creation page
* Subscription Table : list of domains/tags in quora/S.O./Arxiv 
* Session management
* User table


## Phase 3 : Discussion Forum

* Local discussion among users
* Features in discussion
	
* Discussion table [ disc_id, author, premise_string, messages_list ]
* Messages table [ disc_id, msg_id, author, message_string, replies_list ]

* Class : Discussion [ ... ]
* Class : Message [ ... ]

* Tagging people with @user_name

* Edit and Display mode

## Phase 4 : TODO List

* TODO List page : edit mode, read mode
* Add to TODO list button in each Message View
* Manipulating TODO list

* TODO Table [ uname, msg_id, todo_string ]

* Class : TODO [ add, delete, edit ]

## Phase 5 : Publish

* User Model
	- linking external accounts
	
* User Account creation page : Google/FB (OAuth)

* Publish to external forums : Quora, SO
* Discussion view : checkboxes for selecting the forum

* TODO update : Reminder feature
	- send email remainder or FB message

