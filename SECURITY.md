# Security Policy

## Supported Versions

This software can work best with the listed os upto the most recent versions;

| Version | Supported          |
| ------- | ------------------ |
| 21.3    | :linux:            |
| 22.04.4 | :ubuntu:           |
| 6.1     | :ParotOS           |
|         |                    |

## Reporting a Vulnerability

Other older versions of Linux, ubuntu and ParotOS can also be use this code version. the concept of new line differs in diferent machines when handling the thinkertoy banner files. windows machine uses "\r\n" <br>and therefore while the linux versions recorcorgnises "\n" the code bellow can be used to solve this vulnerability;
``` bash
func checkOS() []string {
	var sep []string
	os := runtime.GOOS // Identify operating system

	// Set separators according to operating system
	if os == "windows" {
		sep = []string{"\n", "\r\n"}
	} else {
		sep = []string{"\r\n", "\n"}
	}

	return sep
}
}
```
