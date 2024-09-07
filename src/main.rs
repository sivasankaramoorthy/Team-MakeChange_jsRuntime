use deno_core::JsRuntime;
use deno_core::RuntimeOptions;
use tokio::fs;


async fn run_js(file_path: &str) -> Result<(), Box<dyn std::error::Error>> {
    let js_code = fs::read_to_string(file_path).await?;
    let mut js_runtime = JsRuntime::new(RuntimeOptions::default());
    js_runtime.execute_script("<init>", js_code)?;

    Ok(())
}

#[tokio::main]
async fn main() {
    let result = run_js("./example.js").await;
    if let Err(e) = result {
        eprintln!("Error executing JS file: {:?}", e);
    }
}
