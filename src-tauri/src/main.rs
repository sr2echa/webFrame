#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{Builder, Window, AppHandle, Manager};

#[tauri::command]
// fn navigate_to(app: AppHandle, url: String) {
//     let window = app.get_window("main").unwrap();
//     window.eval(&format!("window.location.href = '{}'", url)).expect("Failed to navigate");
// }

fn navigate_to(app: AppHandle, url: String) {
    if let Some(window) = app.get_window("main") {
        window.eval(&format!("window.location.href = '{}'", url)).expect("Failed to navigate");
    } else {
        eprintln!("Main window not found");
    }
}


fn main() {
    Builder::default()
        .invoke_handler(tauri::generate_handler![navigate_to])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
