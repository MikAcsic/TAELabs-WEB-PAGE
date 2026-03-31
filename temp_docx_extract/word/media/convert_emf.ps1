Add-Type -AssemblyName System.Drawing
$bitmap = [System.Drawing.Image]::FromFile('image1.emf')
$bmp = New-Object System.Drawing.Bitmap $bitmap.Width, $bitmap.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$g.DrawImage($bitmap, 0, 0, $bitmap.Width, $bitmap.Height)
$bmp.Save('C:\Users\Utente1\Desktop\TAELabs WEB PAGE\images\agroecology-partnership.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$bitmap.Dispose()
