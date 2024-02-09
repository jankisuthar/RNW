#include<stdio.h>

int main(){
	char Alphabet = 'Z';
	
	switch(Alphabet)
	{
		case 'A':
			printf("Value of case is A");
			break;
		case 'B':
			printf("Value of case is B");
			break;
		case 'C': 
			printf("value of case is C");
			break;
		default:
			printf("no match found!");
	}
	return 0;
}
