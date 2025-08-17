export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Ionuț Stănculea</div>
            <p className="text-muted-foreground">
              Cloud Infrastructure Engineer building scalable solutions
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} Ionuț Stănculea. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with ☁️ and ⚡ automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}