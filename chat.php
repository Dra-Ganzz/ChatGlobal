<?php
header('Content-Type: application/json');

// File untuk menyimpan pesan
$file = 'messages.json';

// Inisialisasi file jika belum ada
if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

// Handle POST request untuk menyimpan pesan
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['user'] ?? '';
    $message = $_POST['message'] ?? '';
    if ($user && $message) {
        $messages = json_decode(file_get_contents($file), true);
        $messages[] = ['user' => $user, 'message' => $message];
        file_put_contents($file, json_encode($messages));
    }
    exit;
}

// Handle GET request untuk mengambil pesan
$messages = json_decode(file_get_contents($file), true);
echo json_encode($messages);
?>
