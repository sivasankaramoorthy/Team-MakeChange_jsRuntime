# JsRuntime Section 3

This project demonstrates how to integrate Deno JavaScript runtime with a Rust application using the `deno_core` crate. The example includes a Rust program that executes a JavaScript file and customizes the console logging functions in JavaScript.

## Project Structure

- `runtime.js`: A JavaScript file containing custom implementations for `console.warn`, `console.error`, and `console.debug`.
- `main.rs`: A Rust file that uses the `deno_core` crate to execute the `runtime.js` script.
- `example.js`: A sample JavaScript file for testing the custom logging functions.

## Requirements

- Rust (latest stable version)
- Deno (latest version)

## Setup

1. **Install Rust**: Follow the instructions on the [Rust installation page](https://www.rust-lang.org/learn/get-started) if you haven't already.

2. **Install Deno**: Follow the instructions on the [Deno installation page](https://deno.land/manual/getting_started/installation) if you haven't already.

3. **Clone the Repository**:

   ```bash
   git clone https://github.com/sivasankaramoorthy/Team-MakeChange_jsRuntime.git
   cd myjs
## Build and Run the Rust Project

1. **Build the Rust Project**:
   
   Open a terminal and navigate to the project directory. Then, execute the following command to build the Rust project:

   ```bash
   cargo build
   ```
## Run the Rust Program

After building the project, you can run the Rust executable with:

```bash
cargo run
```

## Example Usage

The `example.js` file contains sample code that uses the custom logging functions from `runtime.js`. By running the Rust program, you can see how the custom console methods handle logging:

- **Console Warn**: Logs a warning message with a yellow color.
- **Console Error**: Logs an error message with a red color.
- **Console Debug**: Logs a debug message if the `DEBUG` environment variable is set to `"true"`.
## Environment Variables

- **`DEBUG`**: Set this environment variable to `"true"` to enable debug logging in `console.debug`.

## Troubleshooting

- **Error Executing JS File**: Ensure that the file paths in `main.rs` are correct and that the JavaScript files are properly formatted.
