Add-Type -AssemblyName System.Drawing
$bmp=New-Object System.Drawing.Bitmap 900,180
$g=[System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$g.FillRectangle([System.Drawing.Brushes]::Gold,0,0,280,180)
$g.FillRectangle([System.Drawing.Brushes]::Blue,280,0,220,180)
$g.FillRectangle([System.Drawing.Brushes]::LightSteelBlue,500,0,400,180)
$font=New-Object System.Drawing.Font 'Arial',16,[System.Drawing.FontStyle]::Bold
$g.DrawString('Ministerio de Ciencia', $font, [System.Drawing.Brushes]::Black, 10, 40)
$g.DrawString('Cofinanciado por UE', $font, [System.Drawing.Brushes]::White, 300, 40)
$g.DrawString('Agencia Estatal de Investigación', $font, [System.Drawing.Brushes]::Black, 510, 40)
$bmp.Save('ministerio-eu.png',[System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
