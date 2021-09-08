# UBC REST API

## GET /courses/
all courses in the session
## GET /courses/codes
all unique course codes (ignore section info)
## GET /courses/subject/:subject
all courses in a subject (ie. CHEM, APSC, etc.)
## GET /courses/:code
all courses with the specified course code
## GET /courses/:code/sections
all sections for a specified course code
## GET /courses/:code/prereqs
all prerequisites for a specific course
## GET /courses/:code/title
the title of a course
## GET /courses/:code/summary
the summary of a course
## GET /courses/:code/:section
all courses with the specified course code and section
## POST /courses/add
new course into db
## PUT /courses/update/:code
update a specific courses field


All courses have this schema:
course_code
course_title
section
subject
summary
credits
prereqs
term
days
start
end
building
room
instructor
