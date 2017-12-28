grammar BusinessRules;
 
/*
 * Parser Rules
 */
type_action         : TYPE_ACTION IDENTIFIER AS declared_type;
submit              : SUBMIT;

custom_type         : IDENTIFIER;
declared_type       : ALPHANUM | custom_type;

type_declaration    : DEFINE IDENTIFIER AS REGEXP STRING;
type_declarations   : type_declarations type_declaration |  ;

step                : type_action | submit;
steps               : step AND steps| step;

action_declaration	: TO IDENTIFIER YOU_MUST steps;
action_declarations : action_declaration action_declarations | ;

declared_action     : IDENTIFIER;

execute_action      : declared_action;
execute_actions     : execute_action execute_actions;

main                : type_declarations action_declarations execute_actions;


/*
 * Lexer Rules
 */
 
fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment COMMENT    : '#' ~[\r\n]* ;
fragment ESCAPED_QUOTE : '\\"';

SKIPED : ( WHITESPACE | COMMENT | LINE_JOINING ) -> skip ;
REGEXP              : 'regexp';
DEFINE              : 'define';
ALPHANUM            : 'alphanumeric';
TO 				    : 'to';
AS                  : 'as';
YOU_MUST            : 'you must';
TYPE_ACTION         : 'type';
THEN                : 'then';
SUBMIT              : 'submit';
AND                 : 'and';
SEMICOLON           : ';';
STRING              : '"' ( '\\"' | . )*? '"' ;
IDENTIFIER			: (LOWERCASE | UPPERCASE | '_')+ ;
WHITESPACE          : (' ' | '\t')+ ;
LINE_JOINING        : ('\r'? '\n' | '\r')+ ;
