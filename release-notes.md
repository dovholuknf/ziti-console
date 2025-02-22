# Release 3.0.3

## Bug Fixes

* [Issue #207](https://github.com/openziti/ziti-console/issues/207) - Entity type name is missing from the "No Items" display on some list pages
* [Issue #208](https://github.com/openziti/ziti-console/issues/208) - Router Role Attributes and Service Role Attributes are not populating while creating Service/Router Policies
* [Issue #212](https://github.com/openziti/ziti-console/issues/212) - Router count on dashboard does not display correctly


# Release 3.0.2
* Issue #203 - Fixed styling inconsistencies between old list tables and new ag-grid tables
* Issue #204 - Updated fields for Identities, and Routers CSV download file
* Issue #205 - Fixed display of Registration Token/QR Code Component

# Release 3.0.1
* New Angular list page and create/edit form for Edge Routers
* Updated new scripts with proper license headers

# Release 3.0.0
* Integration of new Angular shared library ziti-console-lib and Angular project app-ziti-console

# Release 2.9.4
* Fix role attribute view in router list
* Change the UI to work with the new controller requirements for POST content Issue #173

# Release 2.9.3
* Bug #169 Fix Spelling Issue
* Bug #170 Fix Saving External Auth Url on JWT Signer
* Feature #156 Add Roll over descriptions to toggle switches
* Bug #171 Remove Add Option to Sessions
* Feature #141 Tab Index set when form opens

# Release 2.9.2
* Bug #157 Code Fields Scroll to position on change

# Release 2.9.1
* Do not show re-enrollment for identities without initial enrollment

# Release 2.9.0
* Fix the Docker Script Execution

# Release 2.8.8
* Add https to Signal Shutdown reponse

# Release 2.8.7
* Add Bing IP to Https Server Declaration

# Release 2.8.6
* Click name to edit
* Add Roles to Identity Table
* Minor Style fixes
* Overflow table scrolling
* Issue #161 - Fix UI inconsistancy
* Issue #160 - Add setting to bind to specific IP
* Issue #158 - Make Tags more visible
* Issue #163 - Fixed Ccode copy on json field in forms
* Issue #164 - Leave IsAdmin visible regardless of identity type

# Release 2.8.5
* Fix Scroll position for Jwt Signer on Change
* Fix ott download issue
* Fix Issue where code mirror pulls you from selecting attribute

# Release 2.8.4
* Issue #119 - Handle generic kill signals
* Issue #151 - Update UI to fix Service Changing OTT property
* Issue #152 - Change property for ott ca jwt
* Issue #150 - Fix External Clim property

# Release 2.8.3
* Fix selectors on Posture Checks
* Add Script Api Call Reference Fields
* Fix Tag Add Icon Button

# Release 2.8.2
* Fill session credential leak in files
* Fix editable not being exposed to ui

# Release 2.8.1
* Add Enrollment Reset to identity list

# Release 2.7.8
* Show cli command list and web service call list for quick service creation
* Change the command list to have an array of operations
* Create a csh/bat download for cli commands

# Release 2.7.7
* Differentiate the enter key on login vs adding controller

# Release 2.7.6
* Fix a group of basic security concerns

# Release 2.7.5
* Fix issue with server exposing settings
* Fix issues with setting controller data after login to another controller

# Release 2.7.4
* Fix drag issue on service policies
* Initial implementation of viewing operations in simple identity creation
* Remove GTag it should not be in the open source project

# Release 2.7.3
* Quick add Simple Identity feature
* Quick add Simple Tunnel Service Feature

# Release 2.7.2
* Fix duplicate files downloading for identity jwts
* Make tables maintain a width for names if things fall off
* Localize Identities Screen
* Fix Dragging on Api Sessions & Sessions
* Remove Animation on Dragging Tables
* Fix Sorting session by creation
* Add Color settings to settings file
* Add Custom logo to settings file
* Add External Claims Info to CA
* Visibily Seperate Kid & Jwks on Jwt Signers

# Release 2.7.1
* Fix bug where suggested hash vales did not perpend the hash on selection

# Release 2.7.0
* Fix issues with identity/service overrides

# Release 2.6.9
* Fix Auth Policy Creation Value
* Fix Edit Auth Policy Screen

# Release 2.6.8
* Fix Time Zone Showing

# Release 2.6.7
* New Dashboard Stage 1
* Fix Cors/Helmet Settings
* Split Organization of Identity Details

# Release 2.6.5
* Skip Error and Continue

# Release 2.6.4
* Give appData field to Identity object
* Provide a means to push z zt-session and controller to auto login ZAC using /sso?controller=[http://yourcontroller:8441]&session=[zt-session]
* Fix various style issues
* Expose Certificate Authority JWT Download
* Fix CAS Switch editing
* Create "Notes" section for Recipe documentation (and others)

# Release 2.6.3
* Fixed CAS Issue with identityRoles
* Fixed Version Display
* Fixed Search and Select on Multi Selector Control

# Release 2.6.2
* Added missing fields to Transnit Router - Cost, noTraversal
* Fix Broken Identity Selector
* Fix Broken Default Auth Policy Loading

# Release 2.6.1
* Fix issue causing legacy settings to not load
* Router creation defaults to Tunneler Enabled
* Added Router Token and JWT
* Added Reject Self Signed Certs options in settings.json
* Added missing fields to terminators
* Fix bug in new select control that made edits not work

# Release 2.6.0
* Update Multi Select Component for Attributes
* Update Localization
* Add JWT-Signers Functionality
* Add Auth Policy Features
* Redesign Navigation to be more Usable
* Organize Sub Menus
* Create Html Components for reused features
* Apply Auth Policy to Identity

# Release 2.5.8
* Release that does not rely on cdn scripts or fonts for any functional need
* Note: Map & Gtag will not work in offline mode.

# Release 2.5.7
* Update how settings are inited and managed within /assets/data/settings.json
* settings.json - edgeControllers list of controllers with properties name, url, default like { "name": "My Edge Controller", "url": "https://mycontroller.com:1208", "default": true}
* settings.json value "editable" will turn off or on the ability to add controllers to ZAC
* settings.json has value "update" which tells zac whether or not to overwrite last saved settings with this file
* settings.json location value tells the system where to save local settings to
* settings.json port and portTLS can be defined here
* Environmental Variables values added for settings overrides for UPDATESETTINGS, reminder PORT, PRTLTLS and SETTINGS where values in the system alread to override settings.json
* Added command line options to override settings for editable, update, location, port & portTLS


# Release 2.5.6
* Expose details around invalid controller entry

# Release 2.5.5
* Updated all the node components to the latest version

# Release 2.5.5
* Added ARM64 building and version publication to pushLatestDocker.sh
* Added version.txt to track version

# Release 2.3.0-2.5.4
Release notes omitted... We'll try to do better! :)

# Release 2.3.0

## What's New
* Recipes - Create a "Recipe" and generate multiple identities, with access to what they need in a flash

## Other changes:
* Update external libraries

## Bugs fixed:
* Minor Style Changes for Usability
* Fix select all button on CA page

# All versions prior to 2.3.0

Changelog tracking began with 2.3.0 - all previous changes were not tracked. If interested please
review the commit history.
