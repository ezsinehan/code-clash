type LanguageVersionType = {
  [key: string]: string;
};

export const LANGUAGE_VERSIONS: LanguageVersionType = {
  python: "3.10.0",
};

type CodeSnippetsType = {
  [key: string]: string;
};

export const CODE_SNIPPETS: CodeSnippetsType = {
  python: `# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\ndef twoSum(nums, target):\n\treturn\n\n\n\n\n\n\n\n\n# Modifiable test cases 4 user\n# Test case 1\nnums = [2, 7, 11, 15]\ntarget = 9\nprint("User-Defined Test Case 1: Expected:(0, 1) Result: ", twoSum(nums, target))\n\n# Add more test cases as needed`,
};

type TestCaseType = {
  [language: string]: string;
};

export const TEST_CASES: TestCaseType = {
  python: `
def run_hidden_tests_twoSum():  
    print("Running Tests...")
    print("Hidden TC 1: Expected (2, 3) Result: ", twoSum([2, 7, 11, 15], 26) )
    # assert twoSum([2, 7, 11, 15], 26) == [0, 1], "Hidden Test Case 1 Failed: Expected [0, 1]"
    # assert twoSum([3, 2, 4], 6) == [1, 2], "Hidden Test Case 2 Failed: Expected [1, 2]"
    # Add more hidden tests as needed
    # print("All Hidden Tests Passed")

run_hidden_tests_twoSum()  
  # Ensure to call run_hidden_tests_twoSum at the end of your Python code snippet
  `,
};

// all languages
// export const LANGUAGE_VERSIONS: LanguageVersionType = {
//   javascript: "18.15.0",
//   typescript: "5.0.3",
//   python: "3.10.0",
//   java: "15.0.2",
//   csharp: "6.12.0",
//   php: "8.2.3",
// };

// all code snips
// export const CODE_SNIPPETS: CodeSnippetsType = {
//   javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
//   typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
//   python: `# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\ndef twoSum(nums, target):`,
//     java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
//     csharp:
//       'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
//     php: "<?php\n\n$name = 'Alex';\necho $name;\n",
// };

// default two sum solution
// def twoSum(nums, target):
//     dict = {}
//     for i,n in enumerate(nums):
//         if n in dict:
//             return dict[n], i
//         else:
//             dict[target-n] = i
