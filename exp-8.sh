
# Create a backup folder
mkdir -p backup

# Move all .txt files to backup folder
mv *.txt backup/ 2>/dev/null

# Delete files older than 7 days from backup
find backup -type f -mtime +7 -delete

# Display message
echo "File management task completed!"
