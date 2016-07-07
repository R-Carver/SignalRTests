using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Utilities.SignalR
{
    public class Messenger
    {
        private readonly static Lazy<Messenger> _instance = new Lazy<Messenger>(() => new Messenger(GlobalHost.ConnectionManager.GetHubContext<MessengerHub>().Clients));

        private Messenger(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;
        }

        public static Messenger Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        private IHubConnectionContext<dynamic> Clients { get; set; }

        public void BroadCastNewContract()
        {
            Clients.All.showNewContractMessage();
        }

    }
}