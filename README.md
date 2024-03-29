SnapPoll
========
A Mobile Polling Interaction with Visual Reference

** Development in progress ** Update 12/9/2014

Jinhyun Kim (dev.jinkim@gmail.com)


![](https://github.com/jinkim608/SnapPoll/blob/master/Assets/Screens/resized_create_poll.png)

##Overview

Instead of writing out all the answer choices for a poll, attach a picture reference that participants can see and use to indicate their responses.

More info including possible use cases and architecture is [in the wiki](https://github.com/jinkim608/SnapPoll/wiki).

##Components

####REST API (Node.js)
**API end point** used in the demo: http://snappoll.herokuapp.com/api

API calls are documented [in this page](https://github.com/jinkim608/SnapPoll/wiki/REST-API-on-Node.js).


#### Database Backend (PostgreSQL)
DB contains users, polls, responses tables. Details of the DB schema are documented [in this page](https://github.com/jinkim608/SnapPoll/wiki/Database-(PostgreSQL)).

####Android Client
A user can create and upload a poll, with a visual reference (picture or screenshot) and a question attached.

User's friends invited through social media platform can participate and upload their responses to the server. A user taps on the location of interest in the picture and sends the response.

A user can see the result of popular votes (aggregated responses from poll participants) in a type of visualization such as a heat map.

##License
    Copyright 2014 Jinhyun Kim

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
