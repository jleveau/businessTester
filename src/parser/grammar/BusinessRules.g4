grammar BusinessRules;
/*
 * Parser Rules
 */

/// TypesDescriptions
fixed_value_type    :  QUOTED_CONTENT;
regex_type          :  REGEXP QUOTED_CONTENT;
default_type        :  ALPHANUM | BOOLEAN | NUMBER | WORD;
custom_type         :  IDENTIFIER;
type_description    :  regex_type | default_type | custom_type | fixed_value_type;

/// TypeDeclaration
type_declaration    : DEFINE IDENTIFIER AS type_description;
type_declarations   : type_declarations type_declaration |;

///Entry
entry_value         : type_description;
entry               : IDENTIFIER AS entry_value;
entries             : entry COMA entries | entry | declared_entry;
declared_entry      : IDENTIFIER;

/// Actions
type_action         : TYPE_ACTION entries;
go_to_action        : GO_TO_ACTION url;
click_action        : CLICK_ON IDENTIFIER;
declared_action     : IDENTIFIER;

step                : click_action | type_action | go_to_action | declared_action;
steps               : step | step AND steps;

action_declaration	: TO IDENTIFIER YOU_MUST steps;
action_declarations : action_declaration action_declarations |;

execute_action      : DO declared_action;
execute_actions     : execute_action execute_actions |;

entry_declaration   : ENTRY IDENTIFIER IS entries;
entry_declarations  : entry_declaration entry_declarations |;

/// Main
declarations        : entry_declarations type_declarations action_declarations;
executions          : execute_actions;

main                : declarations executions;
url                 : QUOTED_CONTENT;

/*
 * Lexer Rules
 */

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;

fragment COMMENT    : '#' ~[\r\n]* ;
fragment ESCAPED_QUOTE : '\\"';
fragment CONTENT    : ('\\"' | . )+?;
fragment QUOTE      : '"';
SKIPED              : ( WHITESPACE | COMMENT | LINE_JOINING ) -> skip ;
LINE_JOINING        : ('\r'? '\n' | '\r')+ ;
REGEXP              : 'regexp';
DEFINE              : 'define';
ALPHANUM            : 'alphanumeric';
BOOLEAN             : 'boolean';
NUMBER              : 'number';
WORD                : 'word';
GO_TO_ACTION        : 'go to';
CLICK_ON            : 'click on';
TO 				    : 'to';
DO                  : 'do';
AS                  : 'as';
IS                  : 'is';
YOU_MUST            : 'you must';
TYPE_ACTION         : 'type';
THEN                : 'then';
AND                 : 'and';
ENTRY               : 'entry';
SEMICOLON           : ';';
L_BRACE             : '{';
R_BRACE             : '}';
SET                 : 'set';
TWO_DOT             : ':';
COMA                : ',';
QUOTED_CONTENT      : QUOTE CONTENT QUOTE;
IDENTIFIER			: (LOWERCASE | UPPERCASE | '_')+ ;
WHITESPACE          : (' ' | '\t')+ ;
