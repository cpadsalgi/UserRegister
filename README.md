# User Register

User Register, web API CRUD Application with Angular as Front end.

### ASP.NET Api Backend Features

* Creating an API backend service
* Isolating business logic and Controller code
* Using a base Repository for business logic
* Separating code into separate projects
* ORM Entity Framework 
* Using ASP.NET Web Api as a backend to an Angular 7 front end

### Version supported:
* .NET Core 2.2
* 2.2 SDK or later
* Visual Studio 2017

### Angular front end Features
* Client side Validation
* Server Side API calls 
* Data input via form 
* Data projection with search filter 
* Managing Server Urls 
* Angular CLI Project

### Version supported:
* Angular 7.3.8
* Angular CLI 7.3.8
* Node 10.15



## Getting Started

### Using Sql Server

``````````````````````````````````````````````````````````````
 Run User_Seed_Data_SqlScript.sql in your sql server Database. 
``````````````````````````````````````````````````````````````

#### To use Sql Server create a new empty database and then point the connection string at the new database.

#### Make sure the account the Web server is running under has rights to create tables and then read/write data.

Update below code ..\UserRegister\WebAPI\WebAPI\Web.config with DB server name and Database Name 

``````````````````````````````````````````````
<connectionStrings>
    <add name="DBModel" connectionString="metadata=res://*/Models.DBModel.csdl|res://*/Models.DBModel.ssdl|res://*/Models.DBModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=<DBServerName>;initial catalog=<DatabaseName>;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
  </connectionStrings>
``````````````````````````````````````````````
  
  
### .NET API Configuration

#### You should just be able to clone this repo as is on Windows:

``````````````````````````````````````````````
Open  …\UserRegister\WebApi\WebApi.sln file in Visual Studio 2017
Run from IIS Express , it should Launch http://localhost:57702 
``````````````````````````````````````````````

#### If IE doesn’t open automatically please copy above url to IE.

### Angular CRUD front end application 

#### The Angular front end sits in a separate AngularCRUD project folder and is built separately from the ASP.NET Web application.
#### To run client, open command prompt. Change to directory  …\UserRegister\angularCRUD  , run below commands 

``````````````````````````````````````````````
cd <installFolder>\UserRegister\angularCRUD
npm install
ng serve
``````````````````````````````````````````````

#### Then navigate to http://localhost:4200 to run the application. 

------------------------------------------------------------------------------


![Screenshot](Snapshot1.png)


![Screenshot](Snapshot1=2.png)
