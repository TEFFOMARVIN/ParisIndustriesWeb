using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;



namespace ParisIndustriesWebsite.wwwroot
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : Controller
    {
        [HttpPost]

        public IActionResult Post([FromForm] string name, [FromForm] string email, [FromForm] string message)
        {
            try
            {
                var mail = new MailMessage();
                mail.From = new MailAddress("marvtee333@gmail.com");
                mail.To.Add("maishiteffo3@gmail.com");
                mail.Subject = $"Contact form from {name}";
                mail.Body = $"Email: {email}\n\nmessage:\n{message}";

                var smtp = new SmtpClient("smtp.yourhost.com")
                {
                    port = 587,
                    Credentials = new NetworkCredential("your_email@domain.com", "your_password"),
                    EnableSsl = true,
                };

                smtp.Send(mail);

                return Ok(new { success = true, message = "Email sent successfully!" });

            }
            catch
            {
                return StatusCode(500, new { success = false, message = Exception.Message });
            }
        }
    }
}
