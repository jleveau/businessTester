grammar BusinessRules;
/*
 * Parser Rules
 */
type_action         : TYPE_ACTION IDENTIFIER AS declared_type;
go_to_action        : GO_TO_ACTION url;
declared_action     : IDENTIFIER;

url                 : QUOTED_CONTENT;

custom_type         : IDENTIFIER;
declared_type       : ALPHANUM | custom_type;

type_description    : regex;

type_declaration    : DEFINE IDENTIFIER AS type_description;
type_declarations   : type_declarations type_declaration |;

step                : type_action | go_to_action;
steps               : step | step AND steps;

action_declaration	: TO IDENTIFIER YOU_MUST steps;
action_declarations : action_declaration action_declarations |;

execute_action      : DO declared_action;
execute_actions     : execute_action execute_actions |;

declarations        : type_declarations action_declarations;
executions          : execute_actions;

regex               :  REGEXP QUOTED_CONTENT;

main                : declarations executions;

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
GO_TO_ACTION        : 'go to';
TO 				    : 'to';
DO                  : 'do';
AS                  : 'as';
YOU_MUST            : 'you must';
TYPE_ACTION         : 'type';
THEN                : 'then';
AND                 : 'and';
SEMICOLON           : ';';
QUOTED_CONTENT      : QUOTE CONTENT QUOTE;
IDENTIFIER			: (LOWERCASE | UPPERCASE | '_')+ ;
WHITESPACE          : (' ' | '\t')+ ;
